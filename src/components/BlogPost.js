import React from "react";
import "./BlogPost.css";
import "bootstrap/dist/css/bootstrap.min.css";


function BlogPost() {
  return (
    <>
      <section className="py-1 header text-center">
        <div className="container py-4">
          <header>
            <h4 className="title">All Articles</h4>
          </header>
        </div>
      </section>

      <section className="pb-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <img
                className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0"
                src="https://static.wixstatic.com/media/4ab240_a3412ceb5c0041dcb69a94018eee139b~mv2.png/v1/fill/w_1274,h_1262,al_c,q_90/4ab240_a3412ceb5c0041dcb69a94018eee139b~mv2.webp"
              />
              <h2 className="h4">Liquid Emulsion Glass Sculptures</h2>
              <p className="small text-muted font-italic">
                Your work explores the intersection of alternative photography
                and glass through photo- sculptures. Can you walk us through
                your creation process and the fusion of these two mediums, how
                does the print practically happen?
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <img
                className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0"
                src="https://static.wixstatic.com/media/4ab240_f8fd2a0dd7644f7faf3d7c0def9fc950~mv2.png/v1/fill/w_925,h_798,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4ab240_f8fd2a0dd7644f7faf3d7c0def9fc950~mv2.png"
              />
              <h2 className="h4">Cyanotype on Wood</h2>
              <p className="small text-muted font-italic">
                Your series "We All Fall Down" combines cyanotype with wood
                stumps, creating bold tridimensional pieces. Can you describe
                the process behind creating these cyanotype prints on wood and
                how you achieve such unique and ephemeral results?
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <img
                className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0"
                src="https://static.wixstatic.com/media/4ab240_6229db66760f4f08b9a836aeba7c15a7~mv2.png/v1/fill/w_925,h_696,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4ab240_6229db66760f4f08b9a836aeba7c15a7~mv2.png"
              />
              <h2 className="h4">Wet Plate Collodion</h2>
              <p className="small text-muted font-italic">
                Wet plate collodion, a photographic process that emerged in the
                mid-19th century, holds a unique place in the history of
                photography. This article explores the intriguing origins of wet
                plate collodion, delves into the intricate process of creating
                these captivating images, and highlights contemporary artists
                who continue to embrace this remarkable technique.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <img
                className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0"
                src="https://static.wixstatic.com/media/4ab240_8e76f0c2be5342fdb2f7715e35436dda~mv2.jpg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4ab240_8e76f0c2be5342fdb2f7715e35436dda~mv2.jpg"
              />
              <h2 className="h4">Film Soup</h2>
              <p className="small text-muted font-italic">
                When 35mm film is placed in various liquids and substances, the
                film strip inside the film canister is attacked. The aim is to
                deliberately destroy the film strip in order to create abstract
                effects in the form of shapes and colours on the finished
                photograph. Actually, that's it. It sounds simple and in the end
                it is.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <img
                className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0"
                src="https://static.wixstatic.com/media/4ab240_a555efbdba2948a2afc775cb3d99a347~mv2.png/v1/fill/w_925,h_973,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4ab240_a555efbdba2948a2afc775cb3d99a347~mv2.png"
              />
              <h2 className="h4">
                AI & Alternative Processes: can there be synergy?
              </h2>
              <p className="small text-muted font-italic">
                In the ever-evolving world of photography, traditional darkroom
                processes hold a special place. The alchemy of chemicals,
                enlargers, and manual techniques has long been cherished by
                artists seeking to express their vision. However, with the rise
                of artificial intelligence (AI), a new realm of possibilities
                has emerged
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <img
                className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0"
                src="https://static.wixstatic.com/media/4ab240_8a8d2c2fa26d4208b3e2bcee53294d27~mv2.png/v1/fill/w_925,h_975,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4ab240_8a8d2c2fa26d4208b3e2bcee53294d27~mv2.png"
              />
              <h2 className="h4">Seeing Double</h2>
              <p className="small text-muted font-italic">
                Before there was Photoshop and its transparency and layers
                tools, photographers had to double expose the film to put an
                image on top of another one. In a nutshell, for a double
                exposure the first pictures taken are intentionally a bit
                underexposed, meaning less light has been allowed to touch the
                film, by manipulating aperture and/or exposure time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPost;
