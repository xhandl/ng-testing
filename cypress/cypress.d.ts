// Due to @typescript-eslint/no-namespace rule in the ESLint configuration,
// the namespace declaration is not allowed in the TypeScript code.
// To fix this, we need to move the namespace declaration to a separate definition file.

declare namespace Cypress {
  interface Chainable {
    /**
     * Get one or more DOM elements by test id.
     *
     * @param id The test id
     * @param options The same options as cy.get
     */
    byTestId<E extends Node = HTMLElement>(
      id: string,
      options?: Partial<
        Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow
      >
    ): Cypress.Chainable<JQuery<E>>;
  }
}
