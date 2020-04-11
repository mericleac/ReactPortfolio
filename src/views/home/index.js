import React from 'react';

import { Title, Paragraph } from '../../components';
import content from '../../content.json';

const HomeView = () => (
    <div>
        <Title text={content.title} />
        <Paragraph text={content.description} />
    </div>
);

export default HomeView;
export { HomeView };
