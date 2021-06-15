export const PATHS = {
  home: {
    path: "/",
    template: `
    <!-- Jumbotron -->
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container py-5">
          <h2 class="display-5 fw-bold">Titulo</h2>
          <p class="fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptatem itaque blanditiis suscipit modi libero, aspernatur
            inventore magnam consequatur possimus placeat excepturi repellat
            natus vel, quo mollitia. Cum, et eveniet?
          </p>
          <button class="btn btn-primary btn-lg" type="button">Boton</button>
        </div>
      </div>
      <!-- End Jumbotron -->

      <!-- Cards -->
      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Titulo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit veniam, ad placeat eaque sapiente commodi numquam
              nemo alias ipsa id.
            </p>
            <button class="btn btn-outline-light" type="button">Boton</button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-light border rounded-3">
            <h2>Titulo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              dolor provident debitis voluptatibus nisi adipisci veniam, quo
              saepe dicta eum!
            </p>
            <button class="btn btn-outline-secondary" type="button">
              Boton
            </button>
          </div>
        </div>
      </div>
      <!-- End Cards -->
    `,
  },
  about: {
    path: "/about",
    template: `
    <div class="container">
      <h1 class="mt-5">Acerca de</h1>
      <p class="lead">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique mollitia
        provident sint odio numquam? Velit delectus tempora reprehenderit! Voluptas
        quo dolorem voluptatibus, eum quasi magni accusamus veniam cupiditate
        recusandae ullam?
      </p>
    </div>
    `,
  },
  contact: {
    path: "/contact",
    template: `
    <div class="container">
      <h1 class="mt-5">Contacto</h1>
      <p class="lead">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique mollitia
        provident sint odio numquam? Velit delectus tempora reprehenderit! Voluptas
        quo dolorem voluptatibus, eum quasi magni accusamus veniam cupiditate
        recusandae ullam?
      </p>
    </div>
    `,
  },
};
