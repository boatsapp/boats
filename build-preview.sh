#!/bin/sh
# Regenerate the preview copy from the real app.
cd "$(dirname "$0")" && sed -e 's#<script>#<script>\nwindow.BOATS_PREVIEW=true;#' -e 's#<title>Boats</title>#<title>Boats Preview</title>#' index.html > preview.html
