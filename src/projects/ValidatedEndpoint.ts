import Project from "../interfaces/project.interface";

const ValidatedEndpoint: Project = {
  name: "Validated Endpoint",
  year: 2023,
  month: 10,
  technologies: ["java"],
  repositoryLink: "",
  projectLink: "validated-endpoint",
  viewLinks: [],
  icon: "fas fa-shield-check",
  images: [],
  shortDescription: "An interface to simplify endpoint design process.",
  longDescription: "This is this projects loooooooooooong description.",
  details: [
    {
      name: "Features",
      items: [{ name: "" }, { name: "" }],
    },
    {
      name: "Highlights",
      items: [{ name: "" }],
    },
    {
      name: "Improvements",
      items: [{ name: "" }],
    },
  ],
};

export default ValidatedEndpoint;

/*ValidatedEndpoint.java

public abstract class ValidatedEndpoint<T, S> implements EndpointStrategy<T, S> {
	public Object[] getContent(HTTPHeader header) {
		// Extract the relevant data from the request header to be used later
		T requestData = extractRequestData(header);

		// Validate the request data
		Either<String, T> validationEither = validateRequestData(requestData);

		// Check if error was encountered during validation
		if (validationEither.left().isPresent())
		{
			return GsonUtils.httpResponseErrorMessage(header, validationEither.left().get());
		}

		// Conduct the actual work of the endpoint in here, and returns the intended response data
		Either<String, S> processedRequestEither = processRequest(header, requestData);

		// Check if error was encountered during this process
		if (processedRequestEither.left().isPresent())
		{
			return GsonUtils.httpResponseErrorMessage(header, processedRequestEither.left().get());
		}

		// Returns the response data if present, else return error response 'Something is not right' ;)
		return processedRequestEither.right().isPresent() ? getResponse(header, processedRequestEither.right().get()) : getErrorResponse(header, "Something is not right");
	}

	/**
	 * This function extracts the required arguments from the provided header
	 *
	 * @param request - Holds all request data
	 * @return - the request data to be used later in the endpoint process
	 */
//public abstract T extractRequestData(HTTPHeader request);

/**
 * This function validates the request data
 *
 * @param requestData - data extracted from the header that needs to be validated before proceeding
 * @return - either an error message from validation or the data that was input
 */
//public abstract Either<String, T> validateRequestData(T requestData);

/**
 * This method takes in the validated request data and uses the info the conduct its intended process
 *
 * @param header - header to be referenced for permissions and other details
 * @param requestData - data required to conduct this endpoint's process
 * @return - either an error message or the response data for this endpoint
 */
//public abstract Either<String, S> processRequest(HTTPHeader header, T requestData);

/**
 * Return a response in the proper format
 *
 * @param header - return the original cookies to be maintained
 * @param responseData - data to be included in the response
 * @return - custom containers as filtered from the request
 */
//public Object[] getResponse(HTTPHeader header, S responseData) {
//	return GsonUtils.httpResponseOK(header, EndpointUtils.GSON_INSTANCE.toJsonTree(responseData));
//}

/**
 * Return an error response in the proper format
 *
 * @param header - return the original cookies to be maintained
 * @param errorMessage - the message to be included in the response
 * @return - error message encountered during handling of request
 */
//public Object[] getErrorResponse(HTTPHeader header, String errorMessage) {
//	return GsonUtils.httpResponseErrorMessage(header, errorMessage);
//}
//}

////////////////////////////////////////////////////////

/*public class Endpoint extends ValidatedEndpoint<RequestData, List<Integer>> {

	@Override
	public RequestData extractRequestData(HTTPHeader request) {
		String apiKey = request.getArg("API_KEY", null);
		int billableAccountId = request.getArgInt("accountId", -1);
		return new RequestData(billableAccountId, apiKey);
	}

	@Override
	public Either<String, RequestData> validateRequestData(RequestData requestData) {
		StringBuilder error_message_builder = new StringBuilder();

		if ( !InternalDelegate.getApiKey().equals(requestData.getApiKey()) ) {
			error_message_builder.append(MarketingActivityUtil.ErrorMessages.INVALID_API_KEY.getValue());
		}

		if (requestData.getBillableAccountId() <= 0) {
			error_message_builder.append(MarketingActivityUtil.ErrorMessages.INVALID_INPUT_ACCOUNT_ID.getValue());
		}

		return error_message_builder.toString().isEmpty() ? Either.right(requestData) : Either.left(error_message_builder.toString());
	}

	@Override
	public Either<String, List<Integer>> processRequest(HTTPHeader header, RequestData requestData) {

		AccountProvisionInformation info = MingleManager.getRuntime()
				.getAccountProvisionInformation(requestData.getBillableAccountId(), null);

		if (info == null) {
			return Either.left(String.format(MarketingActivityUtil.ErrorMessages.NO_ACCOUNT.getValue(), requestData.getBillableAccountId()));
		}

		MarketingActivityMetaDataManager.Runtime runtime = MarketingActivityMetaDataManager.getRuntime();

		if (runtime == null) {
			return Either.left("MarketingActivityMetaDataManager.getRuntime() returned null.");
		}

		MarketingActivityMetaDataDeck meta_data_deck = runtime.getOptionalMetaDataDeck(info, null);

		if (meta_data_deck == null) {
			return Either.left(String.format(MarketingActivityUtil.ErrorMessages.NO_MARKETING_ACTIVITIES.getValue(), requestData.getBillableAccountId()));
		}

		return Either.right(StreamSupport.stream(meta_data_deck.spliterator(), false)
				.map(meta_data -> meta_data.getSimpleId())
				.collect(Collectors.toList()));

	}
}*/
