function Header(props) {
    const name = props.name;

    return (
        <h1>Welcome, {name}!</h1>
    );
}

export default Header;