<?php
/**
 * Created by PhpStorm.
 * User: digid
 * Date: 04-08-2017
 * Time: 18:44
 */

namespace Digidennis\SitePack\ViewHelpers;

use Neos\FluidAdaptor\Core\ViewHelper\AbstractViewHelper;

class RenderAtIndexViewHelper extends AbstractViewHelper
{
    /**
     * @param array $array Array to access
     * @param int $index Index into array
     * @param string $address Path to contents
     * @return mixed $result
     */
    public function render(array $array, $index, $address ) {

        $this->templateVariableContainer->add($address, $array[$index]);
        # render the children, the variable salutation is available for the child view helpers
        $result = $this->renderChildren();
        # remove the added variable again from the context
        $this->templateVariableContainer->remove($address);
        return $result;
    }
}