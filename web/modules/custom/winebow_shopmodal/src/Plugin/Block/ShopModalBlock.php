<?php

namespace Drupal\winebow_shopmodal\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ShopModalBlock' block.
 *
 * @Block(
 *  id = "shop_modal_block",
 *  admin_label = @Translation("Shop modal block"),
 * )
 */
class ShopModalBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    $data = [
      'items' => $this->getListItems(),
     ];

     return [
       '#theme' => 'winebow_shopmodal_block',
       '#data' => $data,
       '#attached' => [
        'library' => ['winebow_shopmodal/modal'],
      ],
     ];
  }

  //Some Crazy documentantion
  //Test 32
  private function getListItems(){
    return [
      'alpha' => [
        'title' => 'Alpha',
        'url' =>  'https://google.com',
      ],
      'beta' => [
        'title' => 'Beta',
        'url' =>  'https://pixethis.gr',
      ],
      'gamma' => [
        'title' => 'Gamma',
        'url' =>  'https://paparia.gr',
      ]
      ];
  }

}
