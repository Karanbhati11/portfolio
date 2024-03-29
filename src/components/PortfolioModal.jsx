import React from "react";

export default function PortfolioModal({ modalOpen, closeModal }) {
  return (
    <div
      className={`modal portfolio-modal-box fade ${modalOpen ? "show" : ""}`}
      id="portfolio-1"
      tabIndex="-1"
      role="dialog"
      style={{ display: modalOpen ? "block" : "none", zIndex: 9999 }}
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              onClick={closeModal}
              type="button"
              class="close btn btn-primary"
              data-bs-dismiss="modal"
            >
              <i class="far fa-times"></i>
            </button>
          </div>

          <div class="modal-body">
            <h6 class="blog-title">Chul urina</h6>

            <div class="portfolio-modal-table">
              <div class="row">
                <div class="col-md-6">
                  <h3 class="portfolio-modal-table-text">
                    <i class="fa-regular fa-file-lines"></i>
                    Project : <span>Website</span>
                  </h3>
                </div>
                <div class="col-md-6">
                  <h3 class="portfolio-modal-table-text">
                    <i class="fa-regular fa-user "></i>
                    Client : <span>Envato</span>
                  </h3>
                </div>
                <div class="col-md-6">
                  <h3 class="portfolio-modal-table-text">
                    <i class="fa-solid fa-code"></i>
                    Langages : <span> Photoshop, Figma</span>
                  </h3>
                </div>
                <div class="col-md-6">
                  <h3 class="portfolio-modal-table-text">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    Preview : <a href="#">www.google.com</a>
                  </h3>
                </div>
              </div>
            </div>

            <div class="h1-modal-paragraph">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                consequatur delectus porro sapiente molestias, magni quasi sed,
                enim corporis omnis doloremque soluta inventore dolorum conseqr
                quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Fuga consequatur delectus porro
                sapiente molestias, magni quasi sed, enim corporis omnis
                doloremque soluta inventore dolorum consequuntur quo obcaecati
                rerum sit non.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                consequatur delectus porro sapiente molestias, magni quasi sed,
                enim corporis omnis doloremque soluta inventore dolorum consetur
                quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Fuga consequatur delectus porro
                sapiente molestias, magni quasi sed, sit amet consectetur
                adipisicing elit. Fuga consequatur delectus porro sapiente
                molestias, magni quasi sed, enim corporis omnis doloremque
                soluta inventore dolorum consequuntur.
              </p>
            </div>
            <div class="h1-modal-img">
              <img src="assets/img/work/portfolio-modal-img-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
