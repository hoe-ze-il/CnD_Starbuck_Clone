import Slides from "./Slides"

const features = [
    {
        container: "feature2",
        featureName: "Hello1",
        images: [
            {
                image_path: "images/gift-cards-img/feature-img-1.jpg",
                alt: "Feature cards 5"
            },
            {
                image_path: "images/gift-cards-img/feature-img-2.jpg",
                alt: "Feature cards 6"
            },
            {
                image_path: "images/gift-cards-img/feature-img-7.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-10.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-8.jpg",
                alt: "Feature cards 10"
            },
            {
                image_path: "images/gift-cards-img/feature-img-7.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-8.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-1.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-13.jpg",
                alt: "Feature cards 0"
            },
        ]
    },


    {
        container: "feature2",
        featureName: "Hello2",
        images: [
            {
                image_path: "images/gift-cards-img/feature-img-1.jpg",
                alt: "Feature cards 5"
            },
            {
                image_path: "images/gift-cards-img/feature-img-2.jpg",
                alt: "Feature cards 6"
            },
            {
                image_path: "images/gift-cards-img/feature-img-7.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-12.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-1.jpg",
                alt: "Feature cards 7"
            },
        ]
    },

    {
        container: "feature3",
        featureName: "Hello3",
        images: [
            {
                image_path: "images/gift-cards-img/feature-img-5.jpg",
                alt: "Feature cards 5"
            },
            {
                image_path: "images/gift-cards-img/feature-img-6.jpg",
                alt: "Feature cards 6"
            },
            {
                image_path: "images/gift-cards-img/feature-img-7.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-8.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-1.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-5.jpg",
                alt: "Feature cards 5"
            },
            {
                image_path: "images/gift-cards-img/feature-img-6.jpg",
                alt: "Feature cards 6"
            },
            {
                image_path: "images/gift-cards-img/feature-img-7.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-1.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-1.jpg",
                alt: "Feature cards 7"
            },
        ]
    },
    {
        container: "feature3",
        featureName: "Hello3",
        images: [
            {
                image_path: "images/gift-cards-img/feature-img-1.jpg",
                alt: "Feature cards 5"
            },
            {
                image_path: "images/gift-cards-img/feature-img-2.jpg",
                alt: "Feature cards 6"
            },
            {
                image_path: "images/gift-cards-img/feature-img-7.jpg",
                alt: "Feature cards 7"
            },
            {
                image_path: "images/gift-cards-img/feature-img-12.jpg",
                alt: "Feature cards 7"
            },
        ]
    },
    {
        container: "feature4",
        featureName: "Hello4",
        images: [
            {
                image_path: "images/gift-cards-img/feature-img-1.jpg",
                alt: "Feature cards 5"
            },
            {
                image_path: "images/gift-cards-img/feature-img-2.jpg",
                alt: "Feature cards 6"
            },
            {
                image_path: "images/gift-cards-img/feature-img-7.jpg",
                alt: "Feature cards 7"
            },

        ]
    }

]


function Feature() {
    return (
        <>
            <div className="feature">
                <>{features.map((item) => Slides(item))}</>
            </div>

        </>
    )
}

export default Feature