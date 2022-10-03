<?php

namespace Drupal\winebow_shopmodal\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Core\Controller\ControllerBase;

/**
 * Class ShopModalAjaxController.
 */
class ShopModalAjaxController extends ControllerBase
{

    /**
     * Index.
     *
     * @return string
     *   Return Hello string.
     */
    public function index($state)
    {
      return new JsonResponse(['links' => $this->getData($state), 'method' => 'GET', 'status'=> 200]);
    }

      //Some Crazy documentantion
  //Test 32
  private function getData($state){
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
