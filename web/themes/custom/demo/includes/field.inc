<?php

use Drupal\node\NodeInterface;

/**
 * @file
 * Theme and preprocess functions for fields.
 */


 /**
  * Implements hook_preprocess_HOOK().
  */
//  function demo_preprocess_field__node__title(&$variables) {
//     ksm($variables);
//     $bundle = $variables['bundle'];
//     $elem = $variables['elem'];
//     if ($elem['#view_mode'] === 'full') {
//       $elem['0'] =
//     }
//  }


//  function demo_preprocess_field__yiylrd(&$variables) {
//    ksm($variables);
// }

// function demo_theme_suggestions_block_alter(array &$suggestions, array $variables) {
//    ksm(' i am in');
//    ksm($suggestions);
//    ksm($variables);
//    // if ($variables['#id'] === 'demo_page_title') {
//    //    $node = \Drupal::routeMatch()->getParameter('node');
//    //    if ($node instanceof \Drupal\node\NodeInterface and ) {
//    //       $suggestions = [];
//    //       $suggestions[] = 'my_custom_template';
//    //    }
//    // }

// }



 /**
  * Implements hook_preprocess_HOOK().
  */
// function demo_preprocess_field__node__title__page__default(&$variables) {
//    ksm($variables);
// }


function demo_theme_suggestions_field_alter(array &$suggestions, array $variables) {
   $elem = $variables['element'];
   $object = isset($elem['#object']) ? $elem['#object'] : null;
   if ($object instanceof NodeInterface && $elem['#view_mode'] === 'full') {
      //Do staff
      $suggestions = ['field__node__title__default'];
   }

}



// function demo_theme_suggestions_field__node__title__page__default_alter(array &$suggestions, array $variables) {
//    $node = $variables['element'][''];

//    ksm('i am 444');
// }