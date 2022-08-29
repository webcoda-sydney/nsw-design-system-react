/** *************************************************************************************************************************************************************
 *
 * form functions
 *
 ************************************************************************************************************************************************************* */
import { TextInput, FormGroupText } from './text/formText';
import { Select, FormGroupSelect, SelectItem } from './select/formSelect';
import { FormGroup } from './group-elements';
import { FormGroupCheckbox } from './checkbox/formCheckbox';
import { FormGroupRadio } from './radio/formRadio';
import { ProgressIndicator } from './progress-indicator/progressIndicator';
export interface FormOption {
    text: string;
    value: string | number;
    selected?: string;
}
export { TextInput, FormGroup, FormGroupText, FormGroupSelect, Select, SelectItem, FormGroupCheckbox, FormGroupRadio, ProgressIndicator, };
