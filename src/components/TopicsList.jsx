import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TOPICS } from '../queries/search';

function TopicsList(props) {
  const { value, onChange } = props;
  let inputValue = value;
  const [topic, setTopic] = useState(inputValue);
  let search;
  if (inputValue === topic) {
    search = inputValue;
  } else {
    search = topic;
    inputValue = topic;
    onChange(topic);
  }

  const { data, error, loading } = useQuery(
    GET_TOPICS,
    {
      variables: { search },
    },
  );

  if (loading) {
    return (
      <span>
        {`Searching term: ${search}...`}
      </span>
    );
  }
  if (error) {
    return (
      <span>
        {`Error: ${error.message}`}
      </span>
    );
  }

  return (
    <>
      {data && data.search.edges && data.search.edges.map((edge, index) => {
        return (
          <ul key={index}>
            <li>
              <h3>{edge.node.resourcePath}</h3>
              <span>{`Stargazers: ${edge.node.stargazers.totalCount}`}</span>
              <div>
                Related topics:
                {edge.node.repositoryTopics.nodes.map((node, j) => {
                  return (
                    <button
                      key={j}
                      onClick={() => { return setTopic(node.topic.name); }}
                      type="button"
                    >
                      {node.topic.name}
                      <span>
                        {node.topic.stargazerCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default TopicsList;
