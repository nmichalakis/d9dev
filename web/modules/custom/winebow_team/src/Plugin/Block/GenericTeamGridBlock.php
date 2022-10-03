<?php

namespace Drupal\winebow_team\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'GenericTeamGridBlock' block.
 *
 * @Block(
 *  id = "generic_team_grid_block",
 *  admin_label = @Translation("Generic team grid block"),
 * )
 */
class GenericTeamGridBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['#theme'] = 'generic_team_grid_block';
     $build['generic_team_grid_block']['#markup'] = 'Implement GenericTeamGridBlock.';

    return $build;
  }

}
