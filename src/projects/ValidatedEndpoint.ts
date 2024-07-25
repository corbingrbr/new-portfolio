import { DetailTypes } from "../interfaces/detail-section.interface";
import Project from "../interfaces/project.interface";

const ValidatedEndpoint: Project = {
  name: "Validated Endpoint",
  year: 2023,
  month: 10,
  technologies: ["java"],
  categories: ["backend", "testing"],
  repositoryLink: "",
  projectLink: "validated-endpoint",
  viewLinks: [],
  icon: "fas fa-shield-check",
  images: [],
  shortDescription:
    "An interface and implementation to simplify an endpoint design process.",
  longDescription: `A team I was on was struggling to maintain a consistent approach to endpoint design across its members. T
  					This was impacting pull request turnaround and prompted the need for a solution that would align our efforts. 
					It had be a solution that would constrain, yet be flexible enough, for a majority of our endpoint work. 
					It also needed to fit in with our existing Java code structure. 
					I presented the solution that was ultimately adopted by the team. 
					Functional programming guided my design choices in its development.`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Endpoint Strategy",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `My solution began as an ordered list of operations that an endpoint that validates should do:<br/><br/>
							
			  				1. Extract request data<br/>
							2. Validate request data<br/>
							3. Process request<br/>
							4. Return response<br/><br/>
						
						I then made an interface to reflect these steps.
							`,
            },
            {
              type: DetailTypes.CODE,
              language: "java",
              content: `
			interface EndpointStrategy<RequestData, ResponseData> {
				
			public abstract RequestData extractRequestData(HTTPHeader request);
				
			public abstract Either<String, RequestData> validateRequestData(RequestData requestData);
				
			public abstract Either<String, ResponseData> processRequest(HTTPHeader header, RequestData requestData);

			public abstract Object[] getResponse(HTTPHeader header, ResponseData responseData);

			}`,
            },
          ],
        },
        {
          name: "Validated Endpoint",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I wanted the implementation of this to look like a functional pipe, composing the above interface functions. 
		  		An Either class already existed within our code base, however it lacked the ability to map functions. In an ideal world the code would have looked like something like below:`,
            },
            {
              type: DetailTypes.CODE,
              language: "ts",
              content: `
				const endpoint = ({header: HTTPHeader}) => 
					pipe(
						header,
						extractRequestData,
						E.chain(validateRequestData),
						E.chain(processRequest),
						E.fold(
							(error) => getErrorResponse(error),
							(responseData) => getResponse(responseData)
						)
					)`,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Either",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `Even though the Either class in our java library didn't lend itself to use in a pipe, it still simplified the design and intentions of our final implementation.
				As a result, my teammates had ease incorporating it into their work, and our turnaround on endpoints as a team became quicker.`,
            },
          ],
        },
        {
          name: "Generics",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `The use of generics in the interface provided the flexibility necessary for it to be applicable to all endpoints. 
			  It also provided an opportunity for us to express the shape of the data we expected to receive and respond with. 
			  This form of code documentation is priceless.`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "Pipe",
          additional: [
            {
              type: DetailTypes.TEXT,
              content:
                "Find an Either class that is usable in a pipe, improving the composition of the interface functions in this situation, as well as others going forward.",
            },
          ],
        },
      ],
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
