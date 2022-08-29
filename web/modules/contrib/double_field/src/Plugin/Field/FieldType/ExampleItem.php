<?php

namespace Drupal\double_field\Plugin\Field\FieldType;

use Drupal\Component\Utility\Random;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\DataDefinition;

/**
 * Defines the 'double_field_example' field type.
 *
 * @FieldType(
 *   id = "double_field_example",
 *   label = @Translation("Example"),
 *   category = @Translation("General"),
 *   default_widget = "double_field_example",
 *   default_formatter = "double_field_example_default"
 * )
 */
class ExampleItem extends FieldItemBase {

  /**
   * {@inheritdoc}
   */
  public function isEmpty() {
    if ($this->test_1 !== NULL) {
      return FALSE;
    }
    elseif ($this->test_2 !== NULL) {
      return FALSE;
    }
    elseif ($this-> !== NULL) {
      return FALSE;
    }
    return TRUE;
  }

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {

    $properties['test_1'] = DataDefinition::create('string')
      ->setLabel(t('Test 1'));
    $properties['test_2'] = DataDefinition::create('string')
      ->setLabel(t('Test 2'));
    $properties[''] = DataDefinition::create('string')
      ->setLabel(t('3'));

    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public function getConstraints() {
    $constraints = parent::getConstraints();

    // @todo Add more constraints here.
    return $constraints;
  }

  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {

    $columns = [
      'test_1' => [
        'type' => 'varchar',
        'length' => 255,
      ],
      'test_2' => [
        'type' => 'varchar',
        'length' => 255,
      ],
      '' => [
        'type' => 'varchar',
        'length' => 255,
      ],
    ];

    $schema = [
      'columns' => $columns,
      // @DCG Add indexes here if necessary.
    ];

    return $schema;
  }

  /**
   * {@inheritdoc}
   */
  public static function generateSampleValue(FieldDefinitionInterface $field_definition) {

    $random = new Random();

    $values['test_1'] = $random->word(mt_rand(1, 255));

    $values['test_2'] = $random->word(mt_rand(1, 255));

    $values[''] = $random->word(mt_rand(1, 255));

    return $values;
  }

}
