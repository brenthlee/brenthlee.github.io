const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
    header {
        align-items: center;
        display: flex;
        position: fixed;
        width: 100%;
        background-color: #0a0a23;
    }

    nav {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        // background-color: #0a0a23;
    }

    ul li {
        list-style: none;
        display: inline;
    }

    a {
        font-weight: 700;
        margin: 0 25px;
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        padding-bottom: 5px;
        box-shadow: inset 0 -2px 0 0 #fff;
    }

    #pfp {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
    }
</style>
<header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="work.html">Work</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    <img src="../assets/profilepic.gif" id="pfp" />
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
