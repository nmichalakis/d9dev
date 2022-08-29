<?php

namespace Drupal\double_field\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\Validator\ConstraintViolationInterface;

/**
 * Defines the 'double_field_example' field widget.
 *
 * @FieldWidget(
 *   id = "double_field_example",
 *   label = @Translation("Example"),
 *   field_types = {"double_field_example"},
 * )
 */
class ExampleWidget extends WidgetBase {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {

    $element['test_1'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Test 1'),
      '#default_value' => isset($items[$delta]->test_1) ? $items[$delta]->test_1 : NULL,
      '#size' => 20,
    ];

    $element['test_2'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Test 2'),
      '#default_value' => isset($items[$delta]->test_2) ? $items[$delta]->test_2 : NULL,
      '#size' => 20,
    ];

    $element[''] = [
      '#type' => 'textfield',
      '#title' => $this->t('3'),
      '#default_value' => isset($items[$delta]->) ? $items[$delta]-> : NULL,
      '#size' => 20,
    ];

    $element['#theme_wrappers'] = ['container', 'form_element'];
    $element['#attributes']['class'][] = 'container-inline';
    $element['#attributes']['class'][] = 'double-field-example-elements';
    $element['#attached']['library'][] = 'double_field/double_field_example';

    return $element;
  }

  /**
   * {@inheritdoc}
   */
  public function errorElement(array $element, ConstraintViolationInterface $violation, array $form, FormStateInterface $form_state) {
    return isset($violation->arrayPropertyPath[0]) ? $element[$violation->arrayPropertyPath[0]] : $element;
  }

  /**
   * {@inheritdoc}
   */
  public function massageFormValues(array $values, array $form, FormStateInterface $form_state) {
    foreach ($values as $delta => $value) {
      if ($value['test_1'] === '') {
        $values[$delta]['test_1'] = NULL;
      }
      if ($value['test_2'] === '') {
        $values[$delta]['test_2'] = NULL;
      }
      if ($value[''] === '') {
        $values[$delta][''] = NULL;
      }
    }
    return $values;
  }

}
