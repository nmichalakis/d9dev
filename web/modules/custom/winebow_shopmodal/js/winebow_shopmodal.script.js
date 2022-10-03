(function (Drupal, once, drupalSettings) {
    Drupal.behaviors.shopmodal = {
      attach: function (context, drupalSettings) {

        // console.log(context);
        const states_list = once(
            "wcw-dropdown-menu-list-item",
            ".wcw-dropdown-menu-list-item",
            context,
            );

        if (!Array.isArray(states_list) || states_list.length === 0) return;

        states_list.forEach((state) => {
            console.log(state);
            let state_link = state.querySelector('.wcw-link');
            console.log('state link');
            console.log(state_link.text);
            state_link.addEventListener("click", function (event) {
                let state_name = state_link.text;
                fetch('/winebow_shopmodal/replace_cta_buttons/'+state_name).then(function (response) {
                    // The API call was successful!
                    return response.json();
                }).then(function (data) {
                    // This is the JSON from our response
                    console.log(data.links);
                    let cta_buttons = data.links;
                    Object.keys(cta_buttons).forEach(function (item) {
                        console.log(item); // key
                        console.log(state_link); // value
                        let cta_button = cta_buttons[item];
                        state_link.text = cta_button.title;
                        state_link.url = cta_button.url;
                    });



                }).catch(function (err) {
                    // There was an error
                    console.warn('Something went wrong.', err);
                });


            });
        });


      },
    };
  })(Drupal, once);
