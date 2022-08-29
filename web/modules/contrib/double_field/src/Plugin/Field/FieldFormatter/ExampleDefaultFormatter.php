<?php

namespace Drupal\double_field\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;

/**
 * Plugin implementation of the 'double_field_example_default' formatter.
 *
 * @FieldFormatter(
 *   id = "double_field_example_default",
 *   label = @Translation("Default"),
 *   field_types = {"double_field_example"}
 * )
 */
class ExampleDefaultFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $element = [];

    foreach ($items as $delta => $item) {

      if ($item->test_1) {
        $element[$delta]['test_1'] = [
          '#type' => 'item',
          '#title' => $this->t('Test 1'),
          '#markup' => $item->test_1,
        ];
      }

      if ($item->test_2) {
        $element[$delta]['test_2'] = [
          '#type' => 'item',
          '#title' => $this->t('Test 2'),
          '#markup' => $item->test_2,
        ];
      }

      if ($item->) {
        $element[$delta][''] = [
          '#type' => 'item',
          '#title' => $this->t('3'),
          '#markup' => $item->,
        ];
      }

    }

    return $element;
  }

}
