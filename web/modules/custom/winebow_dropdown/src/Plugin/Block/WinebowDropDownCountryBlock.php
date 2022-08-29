<?php

namespace Drupal\winebow_dropdown\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'WinebowDropDownCountryBlock' block.
 *
 * @Block(
 *  id = "winebow_dropdown_country_block",
 *  admin_label = @Translation("Winebow Drop Down List country block"),
 * )
 */
class WinebowDropDownCountryBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $data = [
     'items' => $this->getListItems(),
    ];

    return [
      '#theme' => 'winebow_droplist_country_block',
      '#data' => $data,
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
        'url' =>  'https://iefimerida.gr',
      ]
      ];
  }

}
