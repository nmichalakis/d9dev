<?php

namespace Drupal\winebow_team\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'OurTeamsGridBlock' block.
 *
 * @Block(
 *  id = "our_teams_grid_block",
 *  admin_label = @Translation("Our teams grid block"),
 * )
 */
class OurTeamsGridBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['#theme'] = 'our_teams_grid_block';
     $build['our_teams_grid_block']['#markup'] = 'Implement OurTeamsGridBlock.';

    return $build;
  }

}
