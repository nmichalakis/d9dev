<?php

namespace Drupal\winebow_hero\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'WinebowHeroBlock' block.
 *
 * @Block(
 *  id = "winebow_hero_block",
 *  admin_label = @Translation("Winebow hero block"),
 * )
 */
class WinebowHeroBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {


    $data = [
      'hero_title' => '',
      'hero_body'  => '',
      'heo_cta_buttons' => [],
    ];

    return [
      '#theme' => 'hero_section_block',
      '#data' => $data,
    ];
  }

  private function getHeroTitle(){

  }

  private function getHeroBody(){

  }

  private function getHeroCtaButtons(){

  }

}
