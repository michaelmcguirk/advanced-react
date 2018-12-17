import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.8em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};

const dateFormat = (date) => new Date(date).toDateString();

const Article = (props, context) => {
  const author = context.store.lookupAuthor(props.article.authorId);
  return(
    <div style={styles.article}>
      <div style={styles.title}>{props.article.title}</div>
      <div style={styles.author}>{author.firstName} {author.lastName}</div>
      <div style={styles.date}>{dateFormat(props.article.date)}</div>
      <div style={styles.body}>{props.article.body}</div>
    </div>
  );
}

const ArticleContainer = storeProvider(extraProps)(Article);

Article.contextTypes = {
  store: PropTypes.object
}

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  }
}

export default ArticleContainer;