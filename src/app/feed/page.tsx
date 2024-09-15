// pages/index.js
import { motion } from 'framer-motion';

export default function Home() {
    // Dados de exemplo para os posts
    const posts = [
        {
            userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
            username: 'John Doe',
            timestamp: '2 hours ago',
            content: 'This is a sample post content. TailwindCSS is amazing!',
        },
        {
            userImage: 'https://randomuser.me/api/portraits/women/1.jpg',
            username: 'Jane Smith',
            timestamp: '5 hours ago',
            content: 'Loving the new features in Next.js!',
        },
        // Adicione mais posts conforme necessário
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Social Feed</h1>
            {posts.map((post, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <div className="flex items-center mb-3">
                        <img
                            src={post.userImage}
                            alt={post.username}
                            className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{post.username}</h3>
                            <p className="text-sm text-gray-500">{post.timestamp}</p>
                        </div>
                    </div>
                    <p className="mb-4">{post.content}</p>
                    <div className="flex space-x-4">
                        <motion.button
                            whileTap={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="text-blue-500 hover:underline"
                        >
                            Like
                        </motion.button>
                        <button className="text-blue-500 hover:underline">Comment</button>
                        <button className="text-blue-500 hover:underline">Share</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
