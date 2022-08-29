<?php

use Drupal\views\ViewExecutable;

/**
 * @file
 * Theme and preprocess functions for views.
 */


function demo_preprocess_views_view_unformatted(&$variables) {

    $view = $variables['view'];
    $rows = $variables['rows'];
    foreach ($rows as $id => $row) {
        if ($id == 0 || $id == 2 ) {
            $variables['rows'][$id]['content']['#view_mode'] = 'teaser_black';
        }
    }
}