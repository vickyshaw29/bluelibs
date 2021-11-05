import { Collection } from "@bluelibs/x-ui"
import { UserRegisterInput,UserLoginInput } from "../types/User.types"
import gql from "graphql-tag"
import { User } from "../../../../../api/src/bundles/AppBundle/collections/Users/User.model"

export class UserCollection extends Collection<User> {
	getName() {
		// This is the endpoint name of the crud
		// Queries: postsFind, postsFindOne, postsCount
		// Mutations: postsInsertOne, postsUpdateOne, postsDeleteOne
		return "User"
	}

	async register({
		firstName,
		lastName,
		email,
		password,
	}: UserRegisterInput): Promise<any> {
		return this.apolloClient
			.mutate({
				mutation: gql`
					mutation Mutation($registerInput: RegistrationInput!) {
						register(input: $registerInput) {
							token
						}
					}
				`,
				variables: {
					registerInput: {
						firstName,
						lastName,
						email,
						password,
					},
				},
			})
			.then((res) => res.data)
	}

	async login({ username, password }: UserLoginInput): Promise<string> {
		return this.apolloClient
			.mutate({
				mutation: gql`
					mutation LoginMutation($loginInput: LoginInput!) {
						login(input: $loginInput) {
							token
						}
					}
				`,
				variables: {
					loginInput: {
						username,
						password,
					},
				},
			})
			.then((res) => res.data.login.token)
	}
}