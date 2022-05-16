class HomePage
{

getEditBox()
{
    return cy.get(':nth-child(1) > .form-control')
}

getEmailInput()
{
    return cy.get(':nth-child(2) > .form-control')
}

}

export default HomePage