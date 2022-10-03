<?php

namespace Drupal\winebow_shopmodal\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class ShopModalBoxContainerController.
 */
class ShopModalBoxContainerController extends ControllerBase {

  /**
   * Content.
   *
   * @return string
   *   Return Hello string.
   */
  public function content($state) {

    $data = [
      'items' => $this->getListItems($state),
     ];

     return [
       '#theme' => 'winebow_shopmodal_modal',
       '#data' => $data,
     ];
  }

  //Some Crazy documentantion
  //Test 32
  private function getListItems($state){
    return [
      'alpha' => [
        'title' => 'Alpha ' . $state,
        'url' =>  'https://google.com',
      ],
      'beta' => [
        'title' => 'Beta ' . $state,
        'url' =>  'https://pixethis.gr',
      ],
      'gamma' => [
        'title' => 'Gamma ' . $state,
        'url' =>  'https://paparia.gr',
      ]
      ];
  }

}
