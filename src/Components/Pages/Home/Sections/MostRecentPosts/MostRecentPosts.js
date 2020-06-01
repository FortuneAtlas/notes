import React from "react"
import PostList from "Components/Entities/Posts/PostList"
import CardColumns from "Components/Utilities/Layout/Containers/CardColumns"
import PostPreviewCard from "Components/Entities/Posts/Renders/PostPreviewCard"

export default function MostRecentPosts() {
  return (
    <div className="MostRecentPosts">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 offset-1 offset-md-0 col-md-12">
            <h4 className="text-center">Our Latest Articles</h4>
            <PostList
              limit={10}
              layout={{
                component: CardColumns,
                props: {}
              }}
              renderAs={PostPreviewCard}
            />
          </div>
        </div>
      </div>
    </div>
  )
}