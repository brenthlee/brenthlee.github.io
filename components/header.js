const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
    header {
        position: fixed;
        top: 0;
        width: 100%;
    }

    nav {
        align-items: center;
        background-color: #0a0a23;
        display: flex;
        height: 50px;
        justify-content: center;
    }

    ul li {
        display: inline;
        list-style: none;
    }

    a {
        color: #fff;
        font-weight: 700;
        margin: 0 25px;
        text-decoration: none;
    }

    a:hover {
        box-shadow: inset 0 -2px 0 0 #fff;
        padding-bottom: 5px;
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
