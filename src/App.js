import { Flex, Box } from "reflexbox";

export default function App() {
  return (
    <>
      <TailwindExample />
      <ReflexboxExample />
    </>
  );
}

function TailwindExample() {
  return (
    <>
      <Title>Tailwind</Title>
      <Subtitle>FlexBox grids</Subtitle>
      {/* <!-- Full width column --> */}
      <div className="flex mb-4">
        <div className="w-full bg-gray-500 h-12"></div>
      </div>

      {/* <!-- Two columns --> */}
      <div className="flex mb-4">
        <div className="w-1/2 bg-gray-400 h-12"></div>
        <div className="w-1/2 bg-gray-500 h-12"></div>
      </div>

      {/* <!-- Three columns --> */}
      <div className="flex mb-4">
        <div className="w-1/3 bg-gray-400 h-12"></div>
        <div className="w-1/3 bg-gray-500 h-12"></div>
        <div className="w-1/3 bg-gray-400 h-12"></div>
      </div>

      {/* <!-- Four columns --> */}
      <div className="flex mb-4">
        <div className="w-1/4 bg-gray-500 h-12"></div>
        <div className="w-1/4 bg-gray-400 h-12"></div>
        <div className="w-1/4 bg-gray-500 h-12"></div>
        <div className="w-1/4 bg-gray-400 h-12"></div>
      </div>

      {/* <!-- Five columns --> */}
      <div className="flex mb-4">
        <div className="w-1/5 bg-gray-500 h-12"></div>
        <div className="w-1/5 bg-gray-400 h-12"></div>
        <div className="w-1/5 bg-gray-500 h-12"></div>
        <div className="w-1/5 bg-gray-400 h-12"></div>
        <div className="w-1/5 bg-gray-500 h-12"></div>
      </div>

      {/* <!-- Six columns --> */}
      <div className="flex mb-4">
        <div className="w-1/6 bg-gray-400 h-12"></div>
        <div className="w-1/6 bg-gray-500 h-12"></div>
        <div className="w-1/6 bg-gray-400 h-12"></div>
        <div className="w-1/6 bg-gray-500 h-12"></div>
        <div className="w-1/6 bg-gray-400 h-12"></div>
        <div className="w-1/6 bg-gray-500 h-12"></div>
      </div>

      {/* <!-- Responsive grids --> */}
      <Subtitle>Responsive grids</Subtitle>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-12 mb-4 bg-blue-500"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-12 mb-4 bg-blue-400"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-12 mb-4 bg-blue-500"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-12 mb-4 bg-blue-400"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 h-12 mb-4 bg-blue-500"></div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 h-12 mb-4 bg-blue-400"></div>
      </div>
    </>
  );
}

function ReflexboxExample() {
  return (
    <>
      <Title>Reflexbox</Title>
      <Subtitle>FlexBox grids</Subtitle>
      {/* <!-- Full width column --> */}
      <Flex className="mb-4">
        <Box width={1} className="bg-gray-500 h-12" />
      </Flex>

      {/* <!-- Two columns --> */}
      <Flex className="mb-4">
        <Box width={1 / 2} className="bg-gray-400 h-12" />
        <Box width={1 / 2} className="bg-gray-500 h-12" />
      </Flex>

      {/* <!-- Three columns --> */}
      <Flex className="mb-4">
        <Box width={1 / 3} className="bg-gray-400 h-12" />
        <Box width={1 / 3} className="bg-gray-500 h-12" />
        <Box width={1 / 3} className="bg-gray-400 h-12" />
      </Flex>

      {/* <!-- Four columns --> */}
      <Flex className="mb-4">
        <Box width={1 / 4} className="bg-gray-400 h-12" />
        <Box width={1 / 4} className="bg-gray-500 h-12" />
        <Box width={1 / 4} className="bg-gray-400 h-12" />
        <Box width={1 / 4} className="bg-gray-500 h-12" />
      </Flex>

      {/* <!-- Five columns --> */}
      <Flex className="mb-4">
        <Box width={1 / 5} className="bg-gray-400 h-12" />
        <Box width={1 / 5} className="bg-gray-500 h-12" />
        <Box width={1 / 5} className="bg-gray-400 h-12" />
        <Box width={1 / 5} className="bg-gray-500 h-12" />
        <Box width={1 / 5} className="bg-gray-400 h-12" />
      </Flex>

      {/* <!-- Six columns --> */}
      <Flex className="mb-4">
        <Box width={1 / 6} className="bg-gray-400 h-12" />
        <Box width={1 / 6} className="bg-gray-500 h-12" />
        <Box width={1 / 6} className="bg-gray-400 h-12" />
        <Box width={1 / 6} className="bg-gray-500 h-12" />
        <Box width={1 / 6} className="bg-gray-400 h-12" />
        <Box width={1 / 6} className="bg-gray-500 h-12" />
      </Flex>

      {/* <!-- Responsive grids --> */}
      <Subtitle>Responsive grids</Subtitle>
      <Flex className="mb-4" flexWrap="wrap">
        <Box
          width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}
          className="mb-4 bg-blue-500 h-12"
        />
        <Box
          width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}
          className="mb-4 bg-blue-400 h-12"
        />
        <Box
          width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}
          className="mb-4 bg-blue-500 h-12"
        />
        <Box
          width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}
          className="mb-4 bg-blue-400 h-12"
        />
        <Box
          width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}
          className="mb-4 bg-blue-500 h-12"
        />
        <Box
          width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 6]}
          className="mb-4 bg-blue-400 h-12"
        />
      </Flex>
    </>
  );
}

function Title({ children }) {
  return <p class="text-6xl">{children}</p>;
}

function Subtitle({ children }) {
  return <p class="text-4xl">{children}</p>;
}
