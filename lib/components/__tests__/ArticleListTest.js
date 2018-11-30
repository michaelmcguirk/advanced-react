import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';

describe("ArticleList", () => {

  const testData = {
    articles: {
      a: {id: 'a'},
      b: {id: 'b'}
    },
    actions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        articles={testData.articles}
        actions={testData.actions}
      />
    ).toJSON();

    expect(tree.children.length).toBe(2);
  })

});