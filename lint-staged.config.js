export default {
    '*.{js,jsx,ts,tsx,css,scss,md,json,yml,yaml}': ['prettier --write'],
    '*.{js,jsx,ts,tsx}': ['eslint --fix'],
}
