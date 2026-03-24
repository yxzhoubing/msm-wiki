#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 4 ]]; then
  echo "usage: $0 <version> <target> <input_tar_gz> <output_apx>" >&2
  exit 1
fi

VERSION="$1"
TARGET="$2"
INPUT_TARBALL="$3"
OUTPUT_APX="$4"

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_DIR="${SCRIPT_DIR}/template"

if [[ ! -f "${INPUT_TARBALL}" ]]; then
  echo "error: input tarball not found: ${INPUT_TARBALL}" >&2
  exit 1
fi

WORK_DIR="$(mktemp -d)"
trap 'rm -rf "${WORK_DIR}"' EXIT

PKG_DIR="${WORK_DIR}/pkg"
STAGE_DIR="${WORK_DIR}/stage"

mkdir -p "${PKG_DIR}" "${STAGE_DIR}"
tar -xzf "${INPUT_TARBALL}" -C "${PKG_DIR}"

if [[ ! -f "${PKG_DIR}/msm" ]]; then
  echo "error: msm binary not found after extracting ${INPUT_TARBALL}" >&2
  exit 1
fi

cp -R "${TEMPLATE_DIR}/." "${STAGE_DIR}/"
install -m 0755 "${PKG_DIR}/msm" "${STAGE_DIR}/bin/msm"
rm -f "${STAGE_DIR}/bin/.gitkeep"

sed \
  -e "s|__APP_VERSION__|${VERSION}|g" \
  -e "s|__APP_TARGET__|${TARGET}|g" \
  "${TEMPLATE_DIR}/app.inf" > "${STAGE_DIR}/app.inf"

chmod +x \
  "${STAGE_DIR}/afterinstall" \
  "${STAGE_DIR}/appctrl" \
  "${STAGE_DIR}/preinstall" \
  "${STAGE_DIR}/web/cgi/ajax_msm" \
  "${STAGE_DIR}/web/cgi/webmain"

mkdir -p "$(dirname -- "${OUTPUT_APX}")"
COPYFILE_DISABLE=1 tar -czf "${OUTPUT_APX}" -C "${STAGE_DIR}" .
