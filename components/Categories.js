import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import sanityClient, { urlFor } from '../sanity'
import CategoryCard from './CategoryCard'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        sanityClient
            .fetch(`
    *[_type == 'category']
    `).then(data => { setCategories(data) })
            .catch(err => { console.error(err) })
    }, [])

    return (
        <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
        >
            {/* Categories Card */}
            {categories?.map(category => (
                <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}
                />
            ))}

        </ScrollView>
    )
}

export default Categories