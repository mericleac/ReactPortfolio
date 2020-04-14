import React from 'react';

import { Title, List } from '../../components';
import content from '../../content.json';

const SkillsView = () => (
    <div>
        { Object.entries(content.resume).map(([category, skills]) => (
            <div>
                <Title text={category} />
                <List items={skills} />
            </div>
        )) }
    </div>
);

export default SkillsView;
export { SkillsView };
