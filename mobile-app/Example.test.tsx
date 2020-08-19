import React from 'react';
import renderer from 'react-test-renderer';

import Example from './Example';

describe('Example', () => {
    it('has 1 child', () => {
        const tree: any = renderer.create(<Example/>).toJSON();
        expect(tree.children.length).toBe(1);
    });
});
