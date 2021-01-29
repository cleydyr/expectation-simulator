import React from 'react';

import ClayForm from "@clayui/form";

import spritemap from '@clayui/css/lib/images/icons/icons.svg';

const FieldErrorFeedback = ({show, message}) =>
    show &&
    (
        <ClayForm.FeedbackGroup>
            <ClayForm.FeedbackItem>
            <ClayForm.FeedbackIndicator
                spritemap={spritemap}
                symbol="exclamation-full"
            />
            {message}
            </ClayForm.FeedbackItem>
        </ClayForm.FeedbackGroup>
    );

export default FieldErrorFeedback;