(function (Drupal, once, drupalSettings) {
  Drupal.behaviors.accordion_details = {
    attach: function (context, drupalSettings) {

      // Fetch all the details element.
      const wpi_accordion_elems = once(
        "accordion_details",
        document.querySelectorAll(".accordion-item")
      );

      // Add the toggle listeners and make sure only one
      // details accordion item is open with the correct __active css class
      wpi_accordion_elems.forEach((targetDetail) => {
        targetDetail.addEventListener("toggle", event => {
            if (targetDetail.open) {
                targetDetail.classList.add('accordion-item__active');

                let summary = targetDetail.querySelector('summary');
                summary.classList.add('accordion-item__header--active');

                let icon = targetDetail.querySelector('.accordion-item__icon');
                console.log(icon);
                icon.classList.add('accordion-item__icon--active');

                console.log(targetDetail);
                // targetDetail.closest('.accordion__title').classList.add('accordion-item--title__active');
                // targetDetail.closest('.accordion-item__icon').classList.add('accordion-item--icon__active');
                wpi_accordion_elems.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
                    }
                });
            } else {
                targetDetail.classList.remove('accordion-item__active');

                let summary = targetDetail.querySelector('summary');
                summary.classList.remove('accordion-item__header--active');

                let icon = targetDetail.querySelector('.accordion-item__icon');
                icon.classList.remove('accordion-item__icon--active');

                /* the element was toggled closed */
            }
            });
      });

    },
  };
})(Drupal, once);
