# Boats

Because who else is going to carry them.

- `index.html` is the whole app (single file). Edit this.
- `preview.html` is the Claude preview copy (`./build-preview.sh`).
- `build-web.py` builds the hosted site into `web/public` (Firebase Auth + Firestore via `web/shim.js`).
- Pushing to `main` deploys to https://boats-40d0f.web.app and updates the database rules (`web/firestore.rules`).
  The workflow needs the `FIREBASE_SERVICE_ACCOUNT` repository secret.

Local test against emulators:

    cd web && npm ci && cd .. && python3 build-web.py
    (cd web/public && python3 -m http.server 8765 &)
    cd web && npx firebase-tools@13 emulators:exec --config firebase.emu.json --only firestore,auth "node tests/e2e.cjs"
