module Api::V1
  class DashboardController < ApiController
    def dashboard
      render json: {
        summary: {confirmed: 103, active: 90, recovered: 10, dead: 0},
        provinces: [
          {name: "បន្ទាយមានជ័យ", confirmed: 103, active: 90, recovered: 10, dead: 0},
          {name: "បាត់ដំបង", confirmed: 102, active: 90, recovered: 10, dead: 0},
          {name: "កំពង់ចាម", confirmed: 101, active: 90, recovered: 10, dead: 0},
          {name: "កំពង់ស្ពឺ", confirmed: 100, active: 90, recovered: 10, dead: 0},
          {name: "កំពង់ធំ", confirmed: 10, active: 90, recovered: 10, dead: 0},
          {name: "កំពត", confirmed: 1033, active: 90, recovered: 10, dead: 0},
          {name: "កណ្តាល", confirmed: 1203, active: 90, recovered: 10, dead: 0},
          {name: "កោះកុង", confirmed: 1032, active: 90, recovered: 10, dead: 0}
        ]
      }
    end

    def links
      render json: {links: [
        {title: "បន្ទាយមានជ័យ", link: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},
        {title: "បន្ទាយមានជ័យ", link: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},
        {title: "បន្ទាយមានជ័យ", link: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},
        {title: "បន្ទាយមានជ័យ", link: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},
        {title: "បន្ទាយមានជ័យ", link: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},
        {title: "បន្ទាយមានជ័យ", link: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},
        {title: "បន្ទាយមានជ័យ", link: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},
        {title: "បន្ទាយមានជ័យ", link: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},
        {title: "បន្ទាយមានជ័យ", link: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},
        {title: "បន្ទាយមានជ័យ", link: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"}
      ]}
    end

    def contacts
      render json: {contacts: [
        {name: "បន្ទាយមានជ័យ", data: [{text: "016 46 62 92", type: "phone"}, {text: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf", type: "link"}]},
        {name: "បន្ទាយមានជ័យ", data: [{text: "016 46 62 92", type: "phone"}, {text: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf", type: "link"}]},
        {name: "បន្ទាយមានជ័យ", data: [{text: "016 46 62 92", type: "phone"}, {text: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf", type: "link"}]},
        {name: "បន្ទាយមានជ័យ", data: [{text: "016 46 62 92", type: "phone"}, {text: "https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf", type: "link"}]}
      ]}
    end

    def news_list
      render json: {news_list: [
        {id: "1234", title: "បន្ទាយមានជ័យ", description: "This is the description"},
        {id: "1234", title: "បន្ទាយមានជ័យ", description: "This is the description"},
        {id: "1234", title: "បន្ទាយមានជ័យ", description: "This is the description"},
        {id: "1234", title: "បន្ទាយមានជ័យ", description: "This is the description"}
      ]}
    end

    def news_detail
      render json: {news_detail: []}
    end
  end
end
