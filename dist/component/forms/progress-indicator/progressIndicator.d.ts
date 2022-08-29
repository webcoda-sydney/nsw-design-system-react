import PropTypes from 'prop-types';
export interface ProgressIndicatorProps {
    step: number | string;
    of: number;
}
export declare const ProgressIndicator: {
    ({ step, of, ...attributeOptions }: ProgressIndicatorProps): JSX.Element;
    propTypes: {
        step: PropTypes.Validator<number>;
        of: PropTypes.Validator<number>;
    };
};
export interface ProgressIndicatorStepProps {
    active?: boolean;
}
export declare const ProgressIndicatorStep: {
    ({ active }: ProgressIndicatorStepProps): JSX.Element;
    propTypes: {
        active: PropTypes.Requireable<boolean>;
    };
};
