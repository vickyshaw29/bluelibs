import { Collection } from "@bluelibs/x-ui"
import {Post} from "../../../../../api/src/bundles/AppBundle/collections/Posts/Post.model"

export class PostCollection extends Collection<Post> {
	getName() {
		// This is the endpoint name of the crud
		// Queries: postsFind, postsFindOne, postsCount
		// Mutations: postsInsertOne, postsUpdateOne, postsDeleteOne
		return "Posts"
	}

	// getInputs() {
	// 	return {
	// 		insert: "ToDoListInsertInput!",
	// 	}
	// }

	getInputs() {
		return {
			insert: "PostInsertInput!",
			update: "PostUpdateInput!",
		}
	}
}