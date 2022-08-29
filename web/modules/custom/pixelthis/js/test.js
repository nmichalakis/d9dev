(function (Drupal, once, drupalSettings) {
  Drupal.behaviors.test_js = {
    attach: function (context, drupalSettings) {
      //   const selector = document.getElementById("edit-field-category-target-id");
      //   const form = document.getElementById('views-exposed-form-articles-page-1');
      const selector = document.querySelector(
        "[data-drupal-selector=edit-field-category-target-id]"
      );
      let cat_selector_form = once(
        "test_js",
        document.querySelectorAll(
          "[data-drupal-selector=views-exposed-form-articles-page-1]"
        )
      );

      const submit_form = document.querySelector("form.form-cats-submit .js-form-submit");

      //   const form = document.querySelector(
      //     "[data-drupal-selector=views-exposed-form-articles-page-1]"
      //   );

      for (let i = 0; i < cat_selector_form.length; i++) {
        let selectorOptions = selector.options;

        const parent = document.createElement("ul");
        parent.classList.add("fnf-list");

        for (let i = 0; i < selectorOptions.length; i++) {
        //   if (i > 0) {
            let li = document.createElement("li");
            if (i === 0) {
                li.textContent = Drupal.t('All');
            }
            else {
                li.textContent = selectorOptions[i].text;
            }
            li.setAttribute("cat-id", selectorOptions[i].value);
            li.classList.add("fnf-list--item");
            let cat_id = li.getAttribute("cat-id");

            if (cat_id === selector.value) {
                let li_items = document.getElementsByClassName('fnf-list--item__active');
                if (li_items){
                    for (li_item of li_items) {
                        li_item.classList.remove('fnf-list--item__active');
                    }
                }
                li.classList.add("fnf-list--item__active");
            }

            let options = selector.getElementsByTagName("option");
            li.addEventListener("click", function (event) {
                let options = selector.getElementsByTagName("option");
                let cat_id =  this.getAttribute('cat-id');
                for (option of options) {
                    // li.classList.remove('fnf-list--item__active')
                    if (option.value === cat_id) {
                        selector.getElementsByTagName("option")[option.index].selected =
                        "selected";
                        // cat_selector_form[0].submit();
                        submit_form.click();
                    }
                }

            });

            parent.appendChild(li);
        //   }
        }

        cat_selector_form[0].appendChild(parent);
      }
    },
  };
})(Drupal, once);
