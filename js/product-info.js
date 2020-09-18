var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showCategoriesList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let product = array[i];

            htmlContentToAppend += `
                <div class="row">
                    <div class="col">
                    <hr>
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.user + ':' + `</h4>
                        </div>
                        <p class="mb-1">` + product.description + `</p>
                        <p class="date-info"> ` + product.dateTime + ` </p>
                        <p> ` + 'Puntuación:' + ' ' + product.score + ` </p>
                        <hr>
                    </div>
                </div>
            `

        document.getElementById("comments").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        var comments = resultObj.data

        showCategoriesList(comments);
        });
    });

  

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
            
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = 'U$D' + ' ' + category.cost;
            productCriteriaHTML.innerHTML = category.category;
            related.innerHTML = category.relatedProducts[0];
            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);

           
        }
    });
   });
