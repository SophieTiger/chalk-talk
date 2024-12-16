import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserprovider } from "../../contexts/CurrentUserContext";

test("renders NavBar", () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );

    // screen.debug();
    const signInLink = screen.getByRole('link', { name: 'Sign In' });
    expect(signInLink).toBeInTheDocument();
});

test("renders link to the PR's page for a logged in user", async () => {
    render(
        <Router>
            <CurrentUserprovider>
                <NavBar />
            </CurrentUserprovider>
        </Router>
    );
    const prPage = await screen.findByText("PR's")
    expect(prPage).toBeInTheDocument();
});

test("renders Sign in and Sign up buttons again on log out", async () => {
    render(
        <Router>
            <CurrentUserprovider>
                <NavBar />
            </CurrentUserprovider>
        </Router>
    );

    const signOutLink = await screen.findByRole('link', {name: 'Sign out'});
    fireEvent.click(signOutLink);

    const signInLink = await screen.findByRole('link', { name: 'Sign In' });
    const signUpLink = await screen.findByRole('link', { name: 'Sign Up' });
    
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();

});