json.meta do
  json.total_pages @search_results.total_pages
  json.query params[:query]
  json.page @search_results.current_page
end
json.search_results do
  json.array! @search_results.map(&:searchable) do |search_result|
    case search_result
    when User
      json.partial! "api/users/user", user: search_result
    when Comment
      json.partial! "api/comments/comment", comment: search_result
    when Image
      json.partial! "api/images/image", image: search_result, resize: "none"
    end
    json._type search_result.class.to_s


  end
end
