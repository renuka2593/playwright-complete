# Playwright Complete

This project is a complete setup for end-to-end testing using Playwright.

## Project Structure

- `package.json`: Contains the project dependencies and scripts.
- `.gitignore`: Specifies files and directories to be ignored by git.
- `playwright.config.ts`: Configuration file for Playwright.
- `tests/example.spec.ts`: Example test file using Playwright.

## Setup

1. Install dependencies:

   ```sh
   yarn install
   ```

2. Run tests:
   ```sh
   npx playwright test
   ```

## Configuration

The Playwright configuration is defined in `playwright.config.ts`. You can customize the settings as needed. For more information, refer to the [Playwright documentation](https://playwright.dev/docs/test-configuration).

## Writing Tests

Tests are located in the `tests` directory. You can add more test files following the example in `tests/example.spec.ts`.

## License

This project is licensed under the MIT License.
