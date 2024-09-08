## Steps to reproduce this repository

1. Create a new Next.js project with `npx create-next-app@latest` (with tailwindcss and typescript)
2. Replace npm with yarn : `rm -rf node_modules package-lock.json && yarn`
3. Add IDE folder to .gitignore : `echo "/.idea/\n/.vscode/" >> .gitignore`

**🎉 Basic setup is done !**

### Add Dev tools

#### Configure Eslint and Prettier

1. Since eslint is already added with create-next-app, juste add this
   plugin: `yarn add -D @typescript-eslint/eslint-plugin` to override rules levels for typescript files

2. Add prettier by running `yarn add --dev --exact prettier`.
3. Add others package to configure prettier and eslint `prettier for eslint`,`tailwind plugin for prettier and eslint`
   and `sort-imports plugin for prettier`.

> `yarn add --dev eslint-config-prettier eslint-plugin-tailwindcss prettier-plugin-tailwindcss @ianvs/prettier-plugin-sort-imports`

Then create configs files: `.prettier.config.js` and `.eslintrc.json`

1. Add `extends: ["prettier", "plugin:tailwindcss/recommended"]` to `.eslintrc.js`
2. Add `plugins: ['prettier-plugin-tailwindcss','@ianvs/prettier-plugin-sort-imports',]` to `.prettier.config.js`
3. Feel free to customize other rules in `.eslintrc.js` and `.prettier.config.js`

#### Configure Husky and Lint-staged

1. Add husky to the project: `yarn dlx husky-init --yarn2 && yarn`
2. Add lint-staged to the project: `yarn add -D lint-staged`
3. Add coommitlint and gitmoji
   extension : `yarn add -D @commitlint/cli @commitlint/config-conventional commitlint-config-gitmoji`
4. Create lints-staged config file: `touch .lintstagedrc.js`
5. Create commitlint config file: `touch commitlintrc.json`
6. Add husky hooks using lintstaged and commitlint
   - `npx husky add .husky/commit-msg 'yarn commitlint --edit $1'`
   - `npx husky add .husky/pre-commit 'yarn lint-staged'`

#### Customization

After all this steps, you can customize your husky hooks by adding some scripts in `package.json` file.
You have a basic setup and rich configuration for your project.
You can add more plugins and customize your config files as you want.

```json
{
	"scripts": {
		"dev": "next dev",
		"build": "next build",
		"start": "next start",
		"lint": "eslint . --ext .js,.jsx,.ts,.tsx",
		"lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
		"format": "prettier --write .",
		"format:check": "prettier --check .",
		"commit": "git-cz",
		"prepare": "husky install"
	}
}
```

# Environment variables

Exist 3 types of environment variables in this project:

- Public environment variables: are accessible by the browser and the server, must be non-sensitive data.
- Static environment variables: are accessible by the server at build time, must be non-sensitive data cause will be inlined in the build.
- Dynamic environment variables: are accessible only by the server at runtime, most commonly used for sensitive data.

## Public environment variables

Public environment variables are defined in `src/config/env/vars.ts` with `PUBLIC_ENV_LIST` array.
They are accessible by the browser and the server, so you can use them for non-sensitive data.

> Example: `STATS_URL` is a public environment variable, used to send stats from the client.

> A dynamic public environment variables, will opt all layout and pages (not /api) into dynamic rendering.
> Dynamic public environment variables are defined if `HAS_DYNAMIC_PUBLIC_ENV_VARS` is set to `true`.

## Static environment variables

Static environment variables are defined in `.env.{NODE_ENV}` file and are accessible by the server at build time.
Especially, in this project, we use `.env.development` and `.env.production` files.
You can override this vars by adding these in `.env.local` file, but you must provide them at build time.

> Passing them after build command will not work.

## Dynamic environment variables

Dynamic environment variables are evaluated at runtime and are accessible only by the server.

> Vars are by default private and dynamic, so you can use them for sensitive data.
